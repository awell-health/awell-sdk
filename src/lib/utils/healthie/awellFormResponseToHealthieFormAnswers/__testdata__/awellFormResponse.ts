import { type FormResponse } from '@/genql/generated/schema'

export const awellFormResponse: FormResponse = {
  __typename: 'FormResponse',
  answers: [
    {
      question_id: '6P2OBfCFaBmV',
      value: '+32476581696',
      value_type: 'TELEPHONE',
      label: null,
      __typename: 'Answer',
    },
    {
      question_id: 'B6m4dBZTwqCF',
      value: '0',
      value_type: 'BOOLEAN',
      label: null,
      __typename: 'Answer',
    },
    {
      question_id: 'F6ldMKry42P6',
      value: '0',
      value_type: 'NUMBER',
      label: 'O1',
      __typename: 'Answer',
    },
    {
      question_id: 'gLxX4i0Q4_HG',
      value: 'short',
      value_type: 'STRING',
      label: null,
      __typename: 'Answer',
    },
    {
      question_id: 'o4DVFuQ9Rxf3',
      value: '2',
      value_type: 'NUMBER',
      label: null,
      __typename: 'Answer',
    },
    {
      question_id: 'Ozl_s2WvSj2s',
      value: '[0,1]',
      value_type: 'NUMBERS_ARRAY',
      label: 'O1, O2',
      __typename: 'Answer',
    },
    {
      question_id: 'p-7QOg-wIFxr',
      value: '5',
      value_type: 'NUMBER',
      label: null,
      __typename: 'Answer',
    },
    {
      question_id: 'PYPzlYpw7mMt',
      value: 'long text',
      value_type: 'STRING',
      label: null,
      __typename: 'Answer',
    },
    {
      question_id: 'X-dU9rGFllGz',
      value: '2024-06-21T00:00:00.000Z',
      value_type: 'DATE',
      label: null,
      __typename: 'Answer',
    },
  ],
}
