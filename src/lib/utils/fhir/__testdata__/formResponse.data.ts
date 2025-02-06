import {
  type FormResponse,
  enumDataPointValueType,
} from '../../../../genql/generated/schema'

export const formResponseMock: FormResponse = {
  __typename: 'FormResponse',
  answers: [
    {
      question_id: '-hCGgfqR3zZ7',
      label: null,
      value: '1',
      value_type: enumDataPointValueType.BOOLEAN,
      __typename: 'Answer',
    },
    {
      question_id: 'bVGD5I6ckKZx',
      value: '1',
      label: 'Option 2',
      value_type: enumDataPointValueType.NUMBER,
      __typename: 'Answer',
    },
    {
      question_id: 'C9dHRQWojfkP',
      label: null,
      value: '1',
      value_type: enumDataPointValueType.NUMBER,
      __typename: 'Answer',
    },
    {
      question_id: 'KcvNZ5dJHPf0',
      value: 'option_3',
      label: 'Option 3',
      value_type: enumDataPointValueType.STRING,
      __typename: 'Answer',
    },
    {
      question_id: 'knDhobvb9xWJ',
      value: '["3232","some option"]',
      label: 'Option 2, Option 1',
      value_type: enumDataPointValueType.STRINGS_ARRAY,
      __typename: 'Answer',
    },
    {
      question_id: 'PwQq1MVz3sYn',
      label: null,
      value: 'long hello world',
      value_type: enumDataPointValueType.STRING,
      __typename: 'Answer',
    },
    {
      question_id: 'saf_RczvRbay',
      value: '[0,2]',
      label: 'Option 1, Option 3',
      value_type: enumDataPointValueType.NUMBERS_ARRAY,
      __typename: 'Answer',
    },
    {
      question_id: 'uuir17H9iz9P',
      label: null,
      value: '+32476581696',
      value_type: enumDataPointValueType.TELEPHONE,
      __typename: 'Answer',
    },
    {
      question_id: 'vn-VF15nIsv_',
      label: null,
      value: 'hello world',
      value_type: enumDataPointValueType.STRING,
      __typename: 'Answer',
    },
    {
      question_id: 'yiVk87BHUNYs',
      label: null,
      value: '3',
      value_type: enumDataPointValueType.NUMBER,
      __typename: 'Answer',
    },
    {
      question_id: 'ypR9Yudhfsbg',
      label: null,
      value: '2024-05-04T00:00:00.000Z',
      value_type: enumDataPointValueType.DATE,
      __typename: 'Answer',
    },
  ],
}
