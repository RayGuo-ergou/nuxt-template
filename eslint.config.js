import ray from '@ergou_rrrr/eslint-config'
import unocss from '@unocss/eslint-config/flat'

const defaultRules = await ray

export default [...defaultRules, unocss]
