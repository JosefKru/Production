type Modes = Record<string, boolean | string>

export function classNames(
  cls: string,
  mods: Modes,
  optional: string[]
): string {
  return [
    cls,
    ...optional,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([cls, _]) => cls),
  ].join(' ')
}
