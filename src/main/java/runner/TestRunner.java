/**
 * 
 */
package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

/**
 * @author anand acharya
 * Runner class to execute the tests
 */

@RunWith(Cucumber.class)
@CucumberOptions(
			features = "src/main/java/features/CircuitsApi.Feature", //the path of the feature file
			glue = {"stepDefinitions"}, //the path of the step definition files
			plugin = {"pretty","html:test-output", "json:json_output/cucumber.json", "junit:junit_xml/cucumber.xml"}, //to generate different types of reports
			monochrome = true, //display the console output in proper readable format
			strict = true, //it will check if any step is not defined in the step definition file 
			dryRun=false //to check if mapping is proper between feature file and step definition file
		)

public class TestRunner {

}
