$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/CircuitsApi.Feature");
formatter.feature({
  "line": 1,
  "name": "CircuitsApi",
  "description": "",
  "id": "circuitsapi",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Check the number of races in a season using JSON response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I want to know the number of Formula One races in \"\u003cseason\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I retrieve the circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "there should be \"\u003cnumberOfCircuits\u003e\" circuits in the list returned",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;",
  "rows": [
    {
      "cells": [
        "season",
        "numberOfCircuits"
      ],
      "line": 8,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;1"
    },
    {
      "cells": [
        "2017",
        "20"
      ],
      "line": 9,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;2"
    },
    {
      "cells": [
        "2016",
        "21"
      ],
      "line": 10,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;3"
    },
    {
      "cells": [
        "1966",
        "9"
      ],
      "line": 11,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;4"
    },
    {
      "cells": [
        "1950",
        "8"
      ],
      "line": 12,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Check the number of races in a season using JSON response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I want to know the number of Formula One races in \"2017\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I retrieve the circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "there should be \"20\" circuits in the list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2017",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 5225590200,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 10376457399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_list_returned(String)"
});
formatter.result({
  "duration": 4985885099,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Check the number of races in a season using JSON response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I want to know the number of Formula One races in \"2016\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I retrieve the circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "there should be \"21\" circuits in the list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2016",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 3012200,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 876617100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_list_returned(String)"
});
formatter.result({
  "duration": 152021201,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Check the number of races in a season using JSON response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I want to know the number of Formula One races in \"1966\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I retrieve the circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "there should be \"9\" circuits in the list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1966",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 5805000,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 784933200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_list_returned(String)"
});
formatter.result({
  "duration": 99751400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check the number of races in a season using JSON response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-json-response;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I want to know the number of Formula One races in \"1950\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I retrieve the circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "there should be \"8\" circuits in the list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1950",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 2122400,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 754140400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_list_returned(String)"
});
formatter.result({
  "duration": 100551699,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[8]\u003e but was:\u003c[7]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinitions.CircuitsApiStepDefinition.there_should_be_circuits_in_the_list_returned(CircuitsApiStepDefinition.java:44)\r\n\tat ✽.Then there should be \"8\" circuits in the list returned(src/main/java/features/CircuitsApi.Feature:6)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Check the number of races in a season using xml response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I want to know the number of Formula One races in \"\u003cseason\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I retrieve the xml circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "there should be \"\u003cnumberOfCircuits\u003e\" circuits in the xml list returned",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;",
  "rows": [
    {
      "cells": [
        "season",
        "numberOfCircuits"
      ],
      "line": 19,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;1"
    },
    {
      "cells": [
        "2017",
        "20"
      ],
      "line": 20,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;2"
    },
    {
      "cells": [
        "2016",
        "21"
      ],
      "line": 21,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;3"
    },
    {
      "cells": [
        "1966",
        "9"
      ],
      "line": 22,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;4"
    },
    {
      "cells": [
        "1950",
        "8"
      ],
      "line": 23,
      "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Check the number of races in a season using xml response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I want to know the number of Formula One races in \"2017\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I retrieve the xml circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "there should be \"20\" circuits in the xml list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2017",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 1566500,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_xml_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 1236455000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_xml_list_returned(String)"
});
formatter.result({
  "duration": 434848699,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Check the number of races in a season using xml response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I want to know the number of Formula One races in \"2016\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I retrieve the xml circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "there should be \"21\" circuits in the xml list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2016",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 1632600,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_xml_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 833478700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_xml_list_returned(String)"
});
formatter.result({
  "duration": 88469101,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Check the number of races in a season using xml response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I want to know the number of Formula One races in \"1966\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I retrieve the xml circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "there should be \"9\" circuits in the xml list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1966",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 1394999,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_xml_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 808551600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_xml_list_returned(String)"
});
formatter.result({
  "duration": 349383400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Check the number of races in a season using xml response",
  "description": "",
  "id": "circuitsapi;check-the-number-of-races-in-a-season-using-xml-response;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I want to know the number of Formula One races in \"1950\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I retrieve the xml circuit list for that season",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "there should be \"8\" circuits in the xml list returned",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1950",
      "offset": 51
    }
  ],
  "location": "CircuitsApiStepDefinition.i_want_to_know_the_number_of_Formula_One_races_in(String)"
});
formatter.result({
  "duration": 6919400,
  "status": "passed"
});
formatter.match({
  "location": "CircuitsApiStepDefinition.i_retrieve_the_xml_circuit_list_for_that_season()"
});
formatter.result({
  "duration": 823289001,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8",
      "offset": 17
    }
  ],
  "location": "CircuitsApiStepDefinition.there_should_be_circuits_in_the_xml_list_returned(String)"
});
formatter.result({
  "duration": 81665301,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003c8\u003e but was:\u003c7\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:86)\r\n\tat stepDefinitions.CircuitsApiStepDefinition.there_should_be_circuits_in_the_xml_list_returned(CircuitsApiStepDefinition.java:57)\r\n\tat ✽.Then there should be \"8\" circuits in the xml list returned(src/main/java/features/CircuitsApi.Feature:17)\r\n",
  "status": "failed"
});
});