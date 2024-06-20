import { awellFormResponseToHealthieFormAnswers } from './'
import { awellFormDefinition, awellFormResponse } from './__testdata__'

describe('awellFormResponseToHealthieFormAnswers', () => {
  test('Should work', async () => {
    const res = awellFormResponseToHealthieFormAnswers({
      awellFormDefinition,
      awellFormResponse,
    })

    expect(res.formAnswers).toEqual([
      { custom_module_id: '9', answer: '+32476581696' },
      { custom_module_id: '3', answer: '0' },
      { custom_module_id: '1', answer: '0' },
      { custom_module_id: '7', answer: 'short' },
      { custom_module_id: '6', answer: '2' },
      { custom_module_id: '2', answer: 'O1\nO2' },
      { custom_module_id: '4', answer: '5' },
      { custom_module_id: '8', answer: 'long text' },
      { custom_module_id: '5', answer: '2024-06-21T00:00:00.000Z' },
    ])
    expect(res.omittedFormAnswers).toEqual([])
  })
})
