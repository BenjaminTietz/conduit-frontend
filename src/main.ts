import { enableProdMode, APP_INITIALIZER } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";
import { ConfigService } from "./app/core/services/config.service";

export function initConfig(config: ConfigService) {
  return () => config.loadConfig();
}

platformBrowserDynamic([
  {
    provide: APP_INITIALIZER,
    useFactory: initConfig,
    deps: [ConfigService],
    multi: true,
  },
])
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
