/**
 * 
 */
package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import io.restassured.path.xml.XmlPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import junit.framework.Assert;

/**
 * @author anand acharya
 * code to test the api (Cucumber + Java + RestAssured + Data driven approach)
 */
public class CircuitsApiStepDefinition {

	RequestSpecification request;
	Response response;
	JsonPath js;
	XmlPath xp;
	
	/*** Step to create the API request with parameters ***/
	@Given("^I want to know the number of Formula One races in \"([^\"]*)\"$")
	public void i_want_to_know_the_number_of_Formula_One_races_in(String seasonYear){
		RestAssured.baseURI = "http://ergast.com";
		request = RestAssured.given().log().all();
		request.pathParam("raceSeason", seasonYear).log().all();
	}

	/*** Step to retrieve the API response in JSON format ***/
	@When("^I retrieve the circuit list for that season$")
	public void i_retrieve_the_circuit_list_for_that_season() {
		response = request.get("api/f1/{raceSeason}/circuits.json");
		response.prettyPrint();
		Assert.assertEquals(200, response.statusCode());
	}

	/*** Step to verify the JSON response ***/
	@Then("^there should be \"([^\"]*)\" circuits in the list returned$")
	public void there_should_be_circuits_in_the_list_returned(String circuitNumber) {
		js = response.jsonPath();
		Assert.assertEquals(circuitNumber, js.getString("MRData.total"));
	}
	
	/*** Step to retrieve the API response in XML format ***/
	@When("^I retrieve the xml circuit list for that season$")
	public void i_retrieve_the_xml_circuit_list_for_that_season() {
		response = request.get("api/f1/{raceSeason}/circuits");
		response.prettyPrint();
		Assert.assertEquals(200, response.statusCode());
	}

	/*** Step to verify the XML response ***/
	@Then("^there should be \"([^\"]*)\" circuits in the xml list returned$")
	public void there_should_be_circuits_in_the_xml_list_returned(String circuitNumber) {
		xp = response.xmlPath();
		Assert.assertEquals(circuitNumber, xp.get("MRData.@total"));
	}
}
