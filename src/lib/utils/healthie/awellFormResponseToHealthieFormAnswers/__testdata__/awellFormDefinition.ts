import {
  type Form,
} from '@/genql/generated/schema'

export const awellFormDefinition: Form = {
  "__typename": 'Form',
  "id": "Vlfxg1eiHB_B",
  "definition_id": "nkYkBmDyYapB",
  "title": "Awell To Healtie Form",
  "key": "awellToHealtieForm",
  "metadata": null,
  "release_id": "abc",
  "trademark": null,
  "previous_answers": null,
  "questions": [
    {
      "id": "s8DQRHAV83mU",
      "definition_id": "g-HcbSTd2fch",
      "title": "",
      "key": "",
      "dataPointValueType": null,
      "questionType": "NO_INPUT",
      "userQuestionType": "DESCRIPTION",
      "metadata": null,
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "F6ldMKry42P6",
      "definition_id": "OSh3L6S6Pzg2",
      "title": "Single select",
      "key": "singleSelect",
      "dataPointValueType": "NUMBER",
      "questionType": "MULTIPLE_CHOICE",
      "userQuestionType": "MULTIPLE_CHOICE",
      "metadata": "{  \"healthieCustomModuleId\": \"1\"}",
      "options": [
        {
          "id": "sm17VaL-f6w_",
          "value": 0,
          "value_string": "0",
          "label": "O1",
          __typename: 'Option'
        },
        {
          "id": "tjmQWff4ii_N",
          "value": 1,
          "value_string": "1",
          "label": "O2",
          __typename: 'Option'
        }
      ],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "Ozl_s2WvSj2s",
      "definition_id": "PS-gHNPQvWBQ",
      "title": "Multi select",
      "key": "multiSelect",
      "dataPointValueType": "NUMBERS_ARRAY",
      "questionType": "MULTIPLE_CHOICE",
      "userQuestionType": "MULTIPLE_SELECT",
      "metadata": "{  \"healthieCustomModuleId\": \"2\"}",
      "options": [
        {
          "id": "oIDP59OUuyRQ",
          "value": 0,
          "value_string": "0",
          "label": "O1",
          __typename: 'Option'
        },
        {
          "id": "QOmYfw9i89vl",
          "value": 1,
          "value_string": "1",
          "label": "O2",
          __typename: 'Option'
        }
      ],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "B6m4dBZTwqCF",
      "definition_id": "UyGYEjQe9Jcz",
      "title": "Boolean",
      "key": "boolean",
      "dataPointValueType": "BOOLEAN",
      "questionType": "INPUT",
      "userQuestionType": "YES_NO",
      "metadata": "{  \"healthieCustomModuleId\": \"3\"}",
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "p-7QOg-wIFxr",
      "definition_id": "i7_Lqa122HHz",
      "title": "Slider",
      "key": "slider",
      "dataPointValueType": "NUMBER",
      "questionType": "INPUT",
      "userQuestionType": "SLIDER",
      "metadata": "{  \"healthieCustomModuleId\": \"4\"}",
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "X-dU9rGFllGz",
      "definition_id": "l0WNjidTONzT",
      "title": "Date",
      "key": "date",
      "dataPointValueType": "DATE",
      "questionType": "INPUT",
      "userQuestionType": "DATE",
      "metadata": "{  \"healthieCustomModuleId\": \"5\"}",
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "o4DVFuQ9Rxf3",
      "definition_id": "Vmj_Yb43ydCd",
      "title": "Number",
      "key": "number",
      "dataPointValueType": "NUMBER",
      "questionType": "INPUT",
      "userQuestionType": "NUMBER",
      "metadata": "{  \"healthieCustomModuleId\": \"6\"}",
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "gLxX4i0Q4_HG",
      "definition_id": "dUpw8p2nChFF",
      "title": "Short text",
      "key": "shortText",
      "dataPointValueType": "STRING",
      "questionType": "INPUT",
      "userQuestionType": "SHORT_TEXT",
      "metadata": "{  \"healthieCustomModuleId\": \"7\"}",
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "PYPzlYpw7mMt",
      "definition_id": "_APq2aOMxpj5",
      "title": "Long text",
      "key": "longText",
      "dataPointValueType": "STRING",
      "questionType": "INPUT",
      "userQuestionType": "LONG_TEXT",
      "metadata": "{  \"healthieCustomModuleId\": \"8\"}",
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    },
    {
      "id": "6P2OBfCFaBmV",
      "definition_id": "49vBNQ10nTpH",
      "title": "Telephone",
      "key": "telephone",
      "dataPointValueType": "TELEPHONE",
      "questionType": "INPUT",
      "userQuestionType": "TELEPHONE",
      "metadata": "{  \"healthieCustomModuleId\": \"9\"}",
      "options": [],
      "rule": null,
      "questionConfig": null,
      __typename: 'Question'
    }
  ]
}
