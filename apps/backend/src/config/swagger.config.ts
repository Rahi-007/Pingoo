import { INestApplication } from "@nestjs/common";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export function setupSwagger(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle("Pingoo")
    .setDescription("API documentation for Pingoo by Rahi")
    .setVersion("1.0.0")
    .addBearerAuth(
      {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
        name: "Authorization",
        in: "header",
      },
      "JWT"
    )
    .addTag("Auth", "Authentication endpoints")
    .addTag("User", "User management endpoints")
    .addTag("Health", "Health check endpoints")
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("api-docs", app, document, {
    swaggerOptions: {
      filter: true,
      docExpansion: "none",
      persistAuthorization: true,
      showRequestDuration: true,
    },
  });
}
