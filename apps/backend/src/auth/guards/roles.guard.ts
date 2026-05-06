import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Role } from "../../utils/enums";

type RequestWithUser = {
  user?: {
    role?: string;
  };
};

@Injectable()
export class RolesGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestWithUser>();

    return request.user?.role === Role.ADMIN;
  }
}
