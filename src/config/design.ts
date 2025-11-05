export const ICON_SET = 'iconoir' as const;

// Accepts already-prefixed names, eg "mdi:github"
export const iconName = (name: string) => (name.includes(':') ? name : `${ICON_SET}:${name}`);
