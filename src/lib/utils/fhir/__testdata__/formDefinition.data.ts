import {
  type Form,
  enumQuestionType,
  enumDataPointValueType,
  enumUserQuestionType,
} from '../../../../genql/generated/schema'

export const formDefinitionMock: Form = {
  __typename: 'Form',
  id: 'Z-N6CVFy9cv-',
  definition_id: 'q6OwH0yp2JKq',
  title: 'Form with all question types',
  release_id: 'gGENPAtSM5j4-K7yFHzdl',
  key: 'formWithAllQuestionTypes',
  metadata: '{"form": "metadata"}',
  trademark: null,
  previous_answers: null,
  questions: [
    {
      id: 'MUha7ldV6gJL',
      definition_id: 'rUfECkXAtCxe',
      title:
        '<p class="slate-p">This is a description question. It&#x27;s doesn&#x27;t collect any data but just shows some text to the user.</p>',
      key: 'typePChildrenTextThisIsADescriptionQuestionItsDoesntCollectAnyDataButJustShowsSomeTextToTheUser',
      dataPointValueType: null,
      questionType: enumQuestionType.NO_INPUT,
      userQuestionType: enumUserQuestionType.DESCRIPTION,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'bVGD5I6ckKZx',
      definition_id: 'UPHy_BJdHhzs',
      title: 'Single select (number)',
      key: 'singleSelectNumber',
      dataPointValueType: enumDataPointValueType.NUMBER,
      questionType: enumQuestionType.MULTIPLE_CHOICE,
      userQuestionType: enumUserQuestionType.MULTIPLE_CHOICE,
      metadata: '{"meta": "data"}',
      options: [
        {
          id: 'zOTvuy0usHkb',
          value: 0,
          value_string: '0',
          label: 'Option 1',
          __typename: 'Option',
        },
        {
          id: 'q6jRNHKATieI',
          value: 1,
          value_string: '1',
          label: 'Option 2',
          __typename: 'Option',
        },
        {
          id: 'vvMBtwpHl0o5',
          value: 2,
          value_string: '2',
          label: 'Option 3',
          __typename: 'Option',
        },
      ],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'KcvNZ5dJHPf0',
      definition_id: '5rmKlZdZGCxK',
      title: 'Single select (string)',
      key: 'singleSelectString',
      dataPointValueType: enumDataPointValueType.STRING,
      questionType: enumQuestionType.MULTIPLE_CHOICE,
      userQuestionType: enumUserQuestionType.MULTIPLE_CHOICE,
      metadata: null,
      options: [
        {
          id: 'u9qpd6kPr83f',
          value: -1,
          value_string: 'option_1',
          label: 'Option 1',
          __typename: 'Option',
        },
        {
          id: 'yRy_LwI1refh',
          value: -1,
          value_string: 'option_2',
          label: 'Option 2',
          __typename: 'Option',
        },
        {
          id: 'OOCTmiXXvjpN',
          value: -1,
          value_string: 'option_3',
          label: 'Option 3',
          __typename: 'Option',
        },
        {
          id: 'P32BtMUeLwNN',
          value: -1,
          value_string: 'option_4',
          label: 'helloo',
          __typename: 'Option',
        },
        {
          id: 'rrgEixvMsF9I',
          value: -1,
          value_string: 'option_5',
          label: 'helloooooo',
          __typename: 'Option',
        },
        {
          id: 'seZqcRQb2qDm',
          value: -1,
          value_string: 'option_6',
          label: 'test',
          __typename: 'Option',
        },
      ],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'saf_RczvRbay',
      definition_id: 'y8dZyIh1JEHo',
      title: 'Multiple select (number)',
      key: 'multipleSelectNumber',
      dataPointValueType: enumDataPointValueType.NUMBERS_ARRAY,
      questionType: enumQuestionType.MULTIPLE_CHOICE,
      userQuestionType: enumUserQuestionType.MULTIPLE_SELECT,
      metadata: null,
      options: [
        {
          id: 'NRhfKVrRJ1qQ',
          value: 0,
          value_string: '0',
          label: 'Option 1',
          __typename: 'Option',
        },
        {
          id: 'kbdbxrZP9-cY',
          value: 1,
          value_string: '1',
          label: 'Option 2',
          __typename: 'Option',
        },
        {
          id: '7EFDVDtvyZ6h',
          value: 2,
          value_string: '2',
          label: 'Option 3',
          __typename: 'Option',
        },
        {
          id: 'CKqrKwhPbObE',
          value: 3,
          value_string: '3',
          label: 'Option 4',
          __typename: 'Option',
        },
      ],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'knDhobvb9xWJ',
      definition_id: 'PZJCzbhg0Ygr',
      title: 'Multiple select (string)',
      key: 'multipleSelectString',
      dataPointValueType: enumDataPointValueType.STRINGS_ARRAY,
      questionType: enumQuestionType.MULTIPLE_CHOICE,
      userQuestionType: enumUserQuestionType.MULTIPLE_SELECT,
      metadata: null,
      options: [
        {
          id: 'v3XJP3ZgMyc9',
          value: -1,
          value_string: 'some option',
          label: 'Option 1',
          __typename: 'Option'
        },
        {
          id: 'JYHA_c6UFLJX',
          value: 3232,
          value_string: '3232',
          label: 'Option 2',
          __typename: 'Option'
        },
        {
          id: 'xmXV065kgDEk',
          value: -1,
          value_string: 'another option',
          label: 'Option 3',
          __typename: 'Option'
        },
        {
          id: 'eCrmxno3fpcy',
          value: -1,
          value_string: 'option 4',
          label: 'fdsfds',
          __typename: 'Option'
        },
      ],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: '-hCGgfqR3zZ7',
      definition_id: 'QSzAEHWU5SNl',
      title: 'Yes or no? (boolean)',
      key: 'yesOrNoBoolean',
      dataPointValueType: enumDataPointValueType.BOOLEAN,
      questionType: enumQuestionType.INPUT,
      userQuestionType: enumUserQuestionType.YES_NO,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'yiVk87BHUNYs',
      definition_id: 'qeIf6jhiizCu',
      title: 'Slider',
      key: 'slider',
      dataPointValueType: enumDataPointValueType.NUMBER,
      questionType: enumQuestionType.INPUT,
      userQuestionType: enumUserQuestionType.SLIDER,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'ypR9Yudhfsbg',
      definition_id: 'yX86ygNm5M0a',
      title: 'Date',
      key: 'date',
      dataPointValueType: enumDataPointValueType.DATE,
      questionType: enumQuestionType.INPUT,
      userQuestionType: enumUserQuestionType.DATE,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'C9dHRQWojfkP',
      definition_id: '0NuSKClQNXV_',
      title: 'Question that collects a numeric value',
      key: 'questionThatCollectsANumericValue',
      dataPointValueType: enumDataPointValueType.NUMBER,
      questionType: enumQuestionType.INPUT,
      userQuestionType: enumUserQuestionType.NUMBER,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'vn-VF15nIsv_',
      definition_id: 'qiIFXlNLUVzN',
      title: 'Question that collects a sstring value',
      key: 'questionThatCollectsASstringValue',
      dataPointValueType: enumDataPointValueType.STRING,
      questionType: enumQuestionType.INPUT,
      userQuestionType: enumUserQuestionType.SHORT_TEXT,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'PwQq1MVz3sYn',
      definition_id: 'tSFHKGROz6Zm',
      title: 'Question that collects a string but long-form (textarea)',
      key: 'questionThatCollectsAStringButLongFormTextarea',
      dataPointValueType: enumDataPointValueType.STRING,
      questionType: enumQuestionType.INPUT,
      userQuestionType: enumUserQuestionType.LONG_TEXT,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
    {
      id: 'uuir17H9iz9P',
      definition_id: 'yZahm5RhM1mb',
      title: 'Question that collects a phone number',
      key: 'questionThatCollectsAPhoneNumber',
      dataPointValueType: enumDataPointValueType.TELEPHONE,
      questionType: enumQuestionType.INPUT,
      userQuestionType: enumUserQuestionType.TELEPHONE,
      metadata: null,
      options: [],
      rule: null,
      questionConfig: null,
      __typename: 'Question',
    },
  ],
}