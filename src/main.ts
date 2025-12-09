import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { ConfigService } from "./app/core/services/config.service";

const configService = new ConfigService();

configService.loadConfig().then(() => {
  platformBrowserDynamic([{ provide: ConfigService, useValue: configService }])
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
});
