import { Controller, Get } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { DiskHealthIndicator, HealthCheck, HealthCheckService, HttpHealthIndicator, MemoryHealthIndicator } from "@nestjs/terminus";
import { AppService } from "./app.service";
import { SettingRes } from "./auth/dto/setting.dto";
import { toResponse } from "./utils/response";

@ApiTags("App")
@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private memory: MemoryHealthIndicator,
    private disk: DiskHealthIndicator
  ) {}

  @Get("health")
  @HealthCheck()
  @ApiOperation({ summary: "Check application health status" })
  @ApiResponse({ status: 200, description: "Application is healthy" })
  @ApiResponse({ status: 503, description: "Application is unhealthy" })
  check() {
    return this.health.check([
      // HTTP health check (self)
      () => this.http.pingCheck("self", `http://localhost:${process.env.PORT}/api/ping`),
      // Memory health check
      () => this.memory.checkHeap("memory_heap", 150 * 1024 * 1024), // 150MB threshold
      () => this.memory.checkRSS("memory_rss", 300 * 1024 * 1024), // 300MB threshold
      // Disk storage health check
      () =>
        this.disk.checkStorage("disk_storage", {
          path: process.platform === "win32" ? "C:\\" : "/",
          thresholdPercent: 0.9, // 90% usage threshold
        }),
    ]);
  }

  @Get("ping")
  @ApiOperation({ summary: "Simple ping endpoint" })
  @ApiResponse({ status: 200, description: "Pong response" })
  ping() {
    return {
      status: "ok",
      timestamp: new Date().toISOString(),
      service: "Pingoo",
      version: "1.0.0",
    };
  }

  @Get("info")
  @ApiOperation({ summary: "Get application information" })
  @ApiResponse({ status: 200, description: "Application information" })
  info() {
    return {
      service: "Pingoo",
      version: "1.0.0",
      nodeVersion: process.version,
      platform: process.platform,
      uptime: process.uptime(),
      memoryUsage: process.memoryUsage(),
      cpuUsage: process.cpuUsage(),
    };
  }

  @Get("system-settings")
  @ApiOperation({ summary: "Get System Settings" })
  @ApiResponse({ status: 200, description: "Application system settings information" })
  async LoadSystemSettings(): Promise<SettingRes[]> {
    const result = await this.appService.GetSettings();
    return toResponse(SettingRes, result);
  }
}
