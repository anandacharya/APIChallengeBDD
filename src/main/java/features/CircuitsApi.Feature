Feature: CircuitsApi

Scenario Outline: Check the number of races in a season using JSON response
Given I want to know the number of Formula One races in "<season>"
When I retrieve the circuit list for that season
Then there should be "<numberOfCircuits>" circuits in the list returned
Examples:
| season | numberOfCircuits |
| 2017 	 | 20               |
| 2016   | 21               |
| 1966   | 9                |
| 1950   | 8                |

Scenario Outline: Check the number of races in a season using xml response
Given I want to know the number of Formula One races in "<season>"
When I retrieve the xml circuit list for that season
Then there should be "<numberOfCircuits>" circuits in the xml list returned
Examples:
| season | numberOfCircuits |
| 2017 	 | 20               |
| 2016   | 21               |
| 1966   | 9                |
| 1950   | 8                |
