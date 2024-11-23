Feature: Search a disease functionality

        Background:
            Given user is on homepage

        Scenario:Look up a disease
             When user selects a letter
              And user sees list of diseases starting with'C'
              And selects'Cancer'
              And is taken to 'Symptoms and Causes'
              And goes to 'Diagnosis and Treatment'
              And goes to 'Doctors & Departments'
              And goes to 'Care at Mayo Clinic'
              And goes to 'Request an Appointment'
              And confirms to 'New Patient'
              And confirms being 'Inside US'
              And confirms being the Patient
              And enters First Name, Last Name
              And enters DOB,Sex
              And enters Email and Phone Number
              And selects 'No Interpreter'
              And enters StreetAddress, State, City, Zipcode
             Then Describes illness
