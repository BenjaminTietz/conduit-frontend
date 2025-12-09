import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { ConfigService } from "./app/core/services/config.service";

async function bootstrap() {
  const configService = new ConfigService();
  await configService.loadConfig();

  platformBrowserDynamic([{ provide: ConfigService, useValue: configService }])
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
}

bootstrap();
