const { Given, When, Then } = require('@wdio/cucumber-framework');
const Cancer = require('C:\\Users\\user\\webdriverio1\\pageobjects\\mayopom.js');
Given(/^user is on homepage$/, async () => {
	await Cancer.openHomePage();
	//1. Check for Logo
	//2. Check for correct handle
	//3. Check for 'Request Appointment' option
});

When(/^user selects a letter$/, async () => {
	//4. Check if the alphabet thingy is visible 
	await Cancer.Choose();
});

When(/^user sees list of diseases starting with'C'$/, async () => {
	await Cancer.Confirm();
});

When(/^selects'Cancer'$/, async() => {
	await Cancer.Select();
});

When(/^is taken to 'Symptoms and Causes'$/, async () => {
	await Cancer.scrollDownSlowly(30, 100);
});

When(/^goes to 'Diagnosis and Treatment'$/, async() => {
	await Cancer.goToDiagnosis();
	await Cancer.scrollDownSlowly(30, 100);

});

When(/^goes to 'Doctors & Departments'$/, async() => {
	await Cancer.goToDoc();
	await Cancer.scrollDownSlowly(30, 100);
});

When(/^goes to 'Care at Mayo Clinic'$/, async() => {
    await Cancer.goToCare();
	await Cancer.scrollDownSlowly(30, 100);
});

When(/^goes to 'Request an Appointment'$/, async() => {
    await Cancer.goToBookAppmt();
	
});

When(/^confirms to 'New Patient'$/, async() => {
    await Cancer.goToNewPat();
	
});

When(/^confirms being 'Inside US'$/, async() => {
    await Cancer.goToInsideUS();
	await Cancer.goToCont();
	
});

When(/^confirms being the Patient$/, async() => {
	await browser.pause(10000);
    await Cancer.IAmPatient();
	
});

When(/^enters First Name, Last Name$/, async() => {
    await Cancer.PrevCare();
	await Cancer.PutName('Susan','Jo');
	
});



When(/^enters DOB,Sex$/, async() => {
    await Cancer.Dobgender(12071980);
	
});



When(/^enters Email and Phone Number$/, async() => {
    await Cancer.Contact('susan.joe@gmail.com',9999999998);
	
});

When(/^selects 'No Interpreter'$/, async() => {
    await Cancer.NoInterpreter();
	
});

When(/^enters StreetAddress, State, City, Zipcode$/, async() => {
    await Cancer.Address('124 San Mart Road','Jacksonville',32224);
	
});

Then(/^Describes illness$/, async() => {
    await Cancer.Describe('Constant growth of tissue over few months. Nausea and chronic pain');
	await browser.pause(10000);
	
});