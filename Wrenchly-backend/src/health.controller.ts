import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    return {
      status: 'ok',
      message: 'Wrenchly backend is running 🚀',
      timestamp: new Date().toISOString(),
    };
  }
}
