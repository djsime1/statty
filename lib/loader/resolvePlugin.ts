import * as plugins from '~plugins'
import type { PluginFactory } from '~plugins'

export const resolvePlugin: (type: string) => PluginFactory | undefined =
  type_ => {
    const imports: unknown[] = Object.values(plugins)

    // @ts-expect-error
    const factories: PluginFactory[] = imports.filter(factory => {
      if (typeof factory !== 'function') return false

      // @ts-expect-error
      return factory.isFactory === plugins.IS_FACTORY
    })

    return factories.find(({ type }) => type === type_)
  }
