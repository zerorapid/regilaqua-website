import React from 'react';
import { settingsService, SiteSettings } from '../services/settingsService';

interface SettingsContextType {
  settings: SiteSettings;
  loading: boolean;
  refresh: () => Promise<void>;
}

const SettingsContext = React.createContext<SettingsContextType>({
  settings: settingsService.DEFAULT_SETTINGS,
  loading: true,
  refresh: async () => {},
});

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [settings, setSettings] = React.useState<SiteSettings>(settingsService.DEFAULT_SETTINGS);
  const [loading, setLoading] = React.useState(true);

  const fetchSettings = async () => {
    try {
      const data = await settingsService.fetchSettings();
      setSettings(data);
    } catch (err) {
      console.error('Failed to load settings from Supabase:', err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    fetchSettings();
  }, []);

  return (
    <SettingsContext.Provider value={{ settings, loading, refresh: fetchSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  return React.useContext(SettingsContext);
}
