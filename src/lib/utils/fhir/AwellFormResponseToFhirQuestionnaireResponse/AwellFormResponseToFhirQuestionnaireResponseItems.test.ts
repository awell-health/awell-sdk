import { AwellFormResponseToFhirQuestionnaireResponseItems } from '.'
import { formResponseMock, formDefinitionMock } from '../__testdata__'

describe('AwellFormResponsetoFhirQuestionnaireResponse', () => {
  test('Should work', async () => {
    const res = AwellFormResponseToFhirQuestionnaireResponseItems({
      awellFormDefinition: formDefinitionMock,
      awellFormResponse: formResponseMock,
    })

    expect(res).toEqual([
      {
        linkId: 'MUha7ldV6gJL',
        text: "This is a description question. It\\'s doesn\\'t collect any data but just shows some text to the user.",
      },
      {
        linkId: 'bVGD5I6ckKZx',
        text: 'Single select (number)',
        answer: [
          {
            valueCoding: {
              code: '1',
              display: 'Option 2',
            },
          },
        ],
      },
      {
        linkId: 'KcvNZ5dJHPf0',
        text: 'Single select (string)',
        answer: [
          {
            valueCoding: {
              code: 'option_3',
              display: 'Option 3',
            },
          },
        ],
      },
      {
        linkId: 'saf_RczvRbay',
        text: 'Multiple select (number)',
        answer: [
          {
            valueCoding: {
              code: '0',
              display: 'Option 1',
            },
          },
          {
            valueCoding: {
              code: '2',
              display: 'Option 3',
            },
          },
        ],
      },
      {
        linkId: 'knDhobvb9xWJ',
        text: 'Multiple select (string)',
        answer: [
          {
            valueCoding: {
              code: '3232',
              display: 'Option 2',
            },
          },
          {
            valueCoding: {
              code: 'some option',
              display: 'Option 1',
            },
          },
        ],
      },
      {
        linkId: '-hCGgfqR3zZ7',
        text: 'Yes or no? (boolean)',
        answer: [
          {
            valueBoolean: true,
          },
        ],
      },
      {
        linkId: 'yiVk87BHUNYs',
        text: 'Slider',
        answer: [
          {
            valueInteger: 3,
          },
        ],
      },
      {
        linkId: 'ypR9Yudhfsbg',
        text: 'Date',
        answer: [
          {
            valueDateTime: '2024-05-04T00:00:00.000Z',
          },
        ],
      },
      {
        linkId: 'C9dHRQWojfkP',
        text: 'Question that collects a numeric value',
        answer: [
          {
            valueInteger: 1,
          },
        ],
      },
      {
        linkId: 'vn-VF15nIsv_',
        text: 'Question that collects a sstring value',
        answer: [
          {
            valueString: 'hello world',
          },
        ],
      },
      {
        linkId: 'PwQq1MVz3sYn',
        text: 'Question that collects a string but long-form (textarea)',
        answer: [
          {
            valueString: 'long hello world',
          },
        ],
      },
      {
        linkId: 'anotherDescriptionItemId',
        text: 'Another description content',
      },
      {
        linkId: 'uuir17H9iz9P',
        text: 'Question that collects a phone number',
        answer: [
          {
            valueString: '+32476581696',
          },
        ],
      },
    ])
  })
})
