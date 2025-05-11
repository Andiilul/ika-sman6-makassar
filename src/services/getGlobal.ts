import { IGlobal } from '@/interfaces/Global';
import { directus } from '@/lib/directus';
import { readSingleton } from '@directus/sdk';

const getGlobals = async (): Promise<IGlobal | null> => {
  try {
    const globals = await directus.request<IGlobal>(readSingleton('global'));
    return globals;
  } catch (error) {
    console.error('Error fetching globals:', error);
    return null;
  }
};

export { getGlobals };
