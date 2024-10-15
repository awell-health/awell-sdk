import { awellFormResponseToHealthieFormAnswers } from './'
import { awellFormDefinition, awellFormResponse } from './__testdata__'

describe('awellFormResponseToHealthieFormAnswers', () => {
  test('Should work', async () => {
    const res = awellFormResponseToHealthieFormAnswers({
      awellFormDefinition,
      awellFormResponse,
    })

    expect(res.formAnswers).toEqual([
      { custom_module_id: 'single_select_number', answer: 'Option 1' },
      { custom_module_id: 'single_select_string', answer: 'Option 1' },
      { custom_module_id: 'multi_select_number', answer: 'Option 1\nOption 2' },
      { custom_module_id: 'multi_select_string', answer: 'Option 1\nOption 2' },
      { custom_module_id: 'yes_no', answer: 'Yes' },
      { custom_module_id: 'slider', answer: '5' },
      { custom_module_id: 'date', answer: '2024-09-17' },
      { custom_module_id: 'email', answer: 'nick@awellhealth.com' },
      { custom_module_id: 'number', answer: '1' },
      { custom_module_id: 'short_text', answer: 'A short answer' },
      {
        custom_module_id: 'long_text',
        answer: `<p>A long text</p><p>New paragraph</p>`,
      },
      { custom_module_id: 'phone', answer: '+32476581696' },
    ])
    expect(res.omittedFormAnswers).toEqual([])
  })
})
