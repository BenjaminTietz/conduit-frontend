import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class ConfigService {
  private settings: any = null;

  async loadConfig(): Promise<void> {
    const env = this.getEnvironmentName();
    const configUrl = `/config.${env}.json`;

    try {
      const response = await fetch(configUrl);
      if (!response.ok) {
        throw new Error(`Config file not found: ${configUrl}`);
      }
      this.settings = await response.json();
      console.log("Loaded config:", this.settings);
    } catch (error) {
      console.error("Failed to load config:", error);
      throw error;
    }
  }

  get apiUrl(): string {
    if (!this.settings) {
      throw new Error("Config not loaded yet!");
    }
    return this.settings.api_url;
  }

  private getEnvironmentName(): string {
    return document.location.hostname === "localhost"
      ? "development"
      : "production";
  }
}
