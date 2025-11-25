
Process for managing a new API project at WIPO
A new external API project will be identified in one of two ways:
ADTF will decide that a new API is required and approve its creation
A line of business will identify a need for a new external-facing API and will decide to create it, informing ADTF and ensuring endorsement for the work program
The Solution Architect at the line of business level will then identify a Business Product Owner and Technical Owner to lead the project. The product and technical owners will set up a requirements gathering process.
The Solution Architect will request access to sufficient user seats of Stoplight to allow each developer and the Product Owner to have access to the tooling for the duration of the project
Click to add a new task...


Tips if you are in charge of a new API project at WIPO
Review the WIPO API taxonomy and see what other APIs already have similar functionalities to the API you are creating
Reach out to API Technical owners who have built or are managing APIs that have similar functionalities to the API you will be building
Reach out to Business Product Owners who are managing APIs that have the same or similar external audiences as the one your new API will target
Familiarize yourself with ST.90 and ST.97
Be prepared to map developer audience needs using the developer personae template and guide


What should you have achieved by the end of the requirements gathering stage?
Clear, simple audience personae document describes the external audiences needs for the API

Identification of possible object models that will be needed for the API

Clear identification of “paved roads”/functionality workflows that will be needed by external audiences to create value using the API

Project planning documentation completed



Process for requirements gathering at WIPO
Create a developer personae document using the developer audience template to document knowledge of external audience needs
Review existing knowledge bank on external developer audiences to familiarize yourself with their needs
Speak with other API Product Owners who are working with the same external audiences
Business Product Owner meets with the external audience/client/customer to further discuss their needs, adapting the questions proposed on the suggested discussion guide
If this API has been identified because there is another API already existing and the line of business found that a new API was needed to fulfill consumer requests instead of adding new features to that API, then review comments from customers and reach out to those that have proposed the new features that will form part of this API
Review any analytics from other APIs that are used by the same external audiences to see where they have errors logged or frequency of usage, etc
Review the WIPO API taxonomy and see which functionalities will be needed and which APIOs have already built these functionalities into their APIs 
Click to add a new task...


Process for API analysis at WIPO
Business product owner organizes meeting with Technical Owner and any other identified key stakeholders
The following documents are collated for use at the meeting:
Click to add a new task...
Click to add a new task...
Developer persona
Paved roads/functionality workflow map
Any strategy/policy document that has been previously developed to explain why the API is being built
At the meeting, notes for a project briefing template are taken. Following the meeting, the business product owner writes this up as an overview/one-pager explaining the API. This can be written as if the API is being launched/published.
A project plan is drafted during the meeting, using the project planning template.
Following the meeting, the Business Product Owner and Technical Owner present the project plan to their line of business solution architect to confirm allocation of resources and time, including developer team
Once approved, the Business Product Owner tracks project implementation while the Technical Owner leads on API Design tasks
Click to add a new task...


What should you have achieved by the end of the API Design stage?
Creation of an OpenAPI Specification for the API in Stoplight with all error and warnings addressed and an exceptions report completed if necessary

Completed checklist submitted to InfoSec

OAS file uploaded in YAML to the Internal Developer Portal (Backstage)

Info page setup in Internal Developer Portal for the new API product



Process for API Design at WIPO
Technical owner and developer team each have access to Stoplight for the duration of the project
Download the New API project OAS template from the Internal Developer Portal
Upload the New API project OAS template into Stoplight as a new project
Include extension schema so the API can be listed and searched on the WIPO API Catalogue
Using the code screen, go through each field and complete, using the requirements gathering and analysis data to complete each field
Use the API taxonomy and Object Schema inventory to reuse functionalities and object schema from existing APIs wherever possible. Add the new API to the relevant taxonomy and object schema documents to note where the new API aligns with existing categorizations.
Once the OAS is completed, review the error messages and warning labels to ensure the new API aligns with ST-90 rules. Error and warnings indicate these are ST-90 MUSTs and SHOULDs and therefore must be adopted in any new API project unless there are exceptional circumstances.
Once all warning labels have been addressed, any remaining labels that are part of an exceptional case should be documented using the exceptional case template and provided to the Technical Owner and Solution Architect for review.
The Technical Owner and Solution Architect may decide to override the ST-90 rules based on the exceptional case report and can approve the OAS template without further addressing the warning and error labels.
Once the OAS is approved, create a YAML file from the OAS.
Open the OAS file in a text editor and add the following fields at the start of the YAML: (from backstage).
Once this has been saved, upload the OAS to the Gitlab repo where all API YAMLs are stored.
This will automatically trigger a build of a new API product page in the Internal Developer Portal.
Review the new API product page in the Internal Developer Portal to confirm the information is correct and add any additional files if desired, such as the exception report.
Click to add a new task...


An OpenAPI Document (OAD) is a file that describes an API in the OpenAPI Specification format.

It is a standard requirement at WIPO that all external-facing APIs must have an OAD describing the API. A standard template is available that describes the fields that are necessary to complete in an OAD and there is some guidance in the API playbook to guide you.

You must also add extension schema to your OAD. This can be done in the info object of the OAD.

These extension schema make your API searchable using the WIPO API Catalogue, which lists IP APIs from around the world in one central hub.

The extension schema are shown in the OAS YAML template.

The extension schema are:

Extension schema

Description

- x-oas-url:

The URL link to the page where the OAS file will be available for download (This cannot be completed until you have uploaded your API to the Developer Portal and uploaded the first version of your OAD. When you then revise the OAD with this URL, it will be saved to the same URL so you do not need to change this after you update the OAD.)

- x-product-page-url:

The URL link to the product page where the API is described on your website (This cannot be completed until the API is live on the Developer Portal. You can then complete this and the OAS-URL above in the OAD and then reupload the OAD.)

- x-ip-domain

List all the IP domain areas relevant to this API functionality: Patent, Trademark, Industrial design, Copyright, Geographical Indication, Plant Variety Protection, Integrated Circuit Layout Design

- x-service-type

List all of the service types that the API can provide: Account Management, Application Management, Communication, Dissemination, Payment, Portfolio Management, Register, Search, Translation (For more details explaining each of these categories, consult the IP Office Guide from the API catalogue)

- x-content-type

List all of the content type that the API can provide: Abstract, Bibliographic data, Citation data, Claims, Classification, Court decision, Description, Family Data, Full-Text, Legal status data, Licensing data, Office Action data, Payment related data, Terminology data (For more details explaining each of these categories, consult the IP Office Guide from the API catalogue)

- x-content-language

List all of the content languages in which the API can respond, separated by commas, in ISO 639-1 set 1 format.

 

What should you have achieved by the end of the API Development stage?
Code for an API should pass through the WIPO CI/CD process and be automatically added to the relevant GitLab repo and from there automatically added to WIPO’s internal developer portal



Process for API development at WIPO
Code is developed by developer team with Technical Owner leading and reporting to line of business Solution Architect
Code is reviewed in a linter to ensure that it is aligned with WIPO's API standards
Ensure mock testing is carried out
Once code is tested, it should pass through CI/CD process and be automatically published to the relevant GitLab repo and to the internal developer portal
Click to add a new task...


How to use the linter

A linter is a tool that helps you check that your API description is in line with internal style guides and industry standards.

 

WIPO has built a linter (currently in beta version) that includes all of the SD.90 API standards rules. By using the linter, you are making sure that your API is aligned with the WIPO standards.

 

The linter is available in the Stoplight tool. WIPO has a certain number of seats to access the Stoplight tool. Please request access to Stoplight by emailing the SDSS team.

 

The linter provides three four of warnings:



Warning label

Description



ESSENTIAL: These are issues that are reflected in the standards using the term MUST. Therefore, they MUST be resolved before you can deploy your API.



RECOMMENDED: These are issues that are reflected in the standards using the term SHOULD. While it is not essential to address these issues before deployment, the SD.90 has recommended that for WIPO API best practices, they should be addressed and removed wherever possible. Solutions architects or API leads should review any remaining orange warning labels prior to approving an API for deployment.



NOTES: There may occasionally be notes on best practices identified by the linter where technically the API is acceptable, but there may be specific instances or issues to be aware of. These may be interesting to review to see if you can improve the API call.



PROCEED: There may be some elements of your API that technically are acceptable, but that impact on later API calls or processes and should be reviewed in context of how the API performs across a workflow.

 

When using the linter, you must resolve all red warning labels.

 

Ideally, you will also remove all orange warning labels. Where that is not possible, you should prepare an architecture decision record using the following table format (an example is also given):

API

Name of the API

Name of Engineer

(your name)

Link

Insert the URL for the API page within Stoplight, it is usually in the format:

https://wipo.stoplight.io/docs/{name of API]

Reporting to

Insert the name of tech Solution Architect/API Lead who will be reviewing your API

Date

Today’s date

Line

Reason why not being addressed

(for each orange warning label, list what line the label is applied to)

Give an explanation as to why this is not being addressed, and perhaps explain when it could be reviewed and addressed at a later date

Eg. 4

We do not have a license object because there has been no decision on what type of license should be applied at this stage. This is being decided at the December meeting and we can add after that decision has been made. Does not impact on deployment.

 

Using the API linter in Stoplight
Example

We will use the IPCPUB API as our example in the following guide.



Log in to the WIPO workspace: https://wipo.stoplight.io/
Upload or open your OpenAPI document. This is the file in JSON or YAML that describes your API using the OpenAPI Specification format. (If you do not have an OpenAPI document, see the guide on creating an OpenAPI Specification file for your API in the API playbook.)
Open your OpenAPI Document in Stoplight in Edit mode and view the Preview mode:
Choose your API from the lefthand menu
 

 

b. From the API page, click on the blue Edit button on the lefthand menu

 

 

c. The OpenAPI Document is now shown for this API. On the lefthand side is a menu button for the interface. Select Preview to see the linter rules warnings.

 

 

2. Review the linter warnings and decide which ones to act upon. Remember, you must remove all red warnings to enable a CI/CD process for your API. 



3. It is recommended you also remove all orange warning labels, or complete a memo to your solution architect or API team lead explaining why each orange label is not being addressed prior to deployment. 



4. Review the green and blue notes for anything you may wish to address.

 

An example: correcting red and orange warning labels in the draft IPCPUB API.
In the draft IPCPUB API, there is one red label showing. Click on the book icon on the right hand side next to the warning description to learn more about the standard that informed this rule.

 

 

A popup will explain the rule in more detail and give a good example and a bad example of how the standard has been applied.

 

Go to that line in the OpenAPI document and address the edit. In this case, an array object needs an items object attached to it. We have started to address this by adding a new object in the array called items. But immediately when we do so, it reminds us that we need to make sure this item is defined as an object:

 

We add in that items is an object, and now all of our red warnings have been removed.

 

We can now proceed to work through as many of the orange warnings as possible.

 

What should you have achieved by the end of the Testing stage?
API passes all contract and integration tests 

API published to production environment and automatically added to external developer portal (when available)



Process for API testing at WIPO
Use Stoplight to assess the API contract

Use Postman or Smart Bear to test the API

Once testing is complete, complete the publish an API template form and share with the Technical Owner

Technical Owner and Solution Architect decide on publishing API to production environment

If decision is made to publish to production environment, Product Owner informed to prepare 



What should you have achieved by the end of the API Deployment stage?
API available on external developer portal

SEO, Postman collection, API catalog entries created for API

Feedback received from early adopters of the API within 2 months



Process for API deployment at WIPO
Once an API has gone through testing phases and the Solution Architect and Technical Owner have agreed to publish the API externally (see Testing stage), the API is moved to a production environment
The OpenAPI Specification is updated to recognise that a version has been released and that the API is available in  a production environment
In the future, this will trigger automatic updates on the internal developer portal, which pushes the API to the external developer portal
The Product Owner is responsible for now completing minimum documentation for new APIs:
Use cases: The API is described briefly with each potential use case for the API described in one sentence
Authorization guide: Steps to register as a user of the API and to authenticate the use is described
Getting started: A simple tutorial is provided that explains how to make a first call with the API (hello world)
Interactive documentation: The external developer portal should automatically generate a swagger-like accordion interface where users can see each endpoint and make sample calls to see the responses
The Product Owner ensures analytics are set up for the new API
Where possible, the Product Owner sets up an automated email campaign to welcome new users, complete a survey on usage needs, and invite to participate in future feedback
The Product Owner sets up a way to record survey results and analyze, and to create a user group for those who are willing to participate in future usability and roadmap testing
The Product Owner and Technical Owner meet regularly (for example, every 2 weeks) for the first three months of a new API to review in initial use, monitor analytics, and test performance and usability
The Product Owner makes sure the API is listed on apis.guru, rapidAPI. The Product Owner ensures the API product page on the external portal is aligned with search keywords relevant to finding the API
The Product Owner and Technical Owner create a Postman collection describing the API endpoints and functionalities 
Where uptake is low, the Product Owner may initiate a promotional campaign by reviewing the initial developer audiences expected to make use of the API and create a plan to reach out to key targets in the developer audience segment
Click to add a new task...


Minimum requirements for API documentation
Your complete API documents will consist of:

An OpenAPI Specification file (step 1)
External portal page text (steps 2 - 7)
Authentication guide (step 8)
Getting Started guide (step 9)
Interactive user interface (step 10).
General notes on documentation and writing styles
The following documentation recommendations are for external-facing APIs, but the following recommendations for external-facing APIs could help internal API users as well.. Remember, other WIPO internal teams may need to use your APIs. Also, WIPO often has external developer contractors who need to quickly understand and use internal APIs. If you are building internal APIs that others are going to use regularly, you may want to follow some of the recommendations in this guide.
Always speak directly to your audience. Use 'you' and 'your' rather than speaking in the third person for example, avoid phrasing like 'the developer can'...
Use plain language. After you write instructions, read them aloud to make sure it flows naturally. It is better to sound like you are having a conversation with your developer audience than writing a formal letter to them!
Use bullet points where possible to make scanning your documentation easier.


Steps in preparing your API documentation
#1 Complete an OpenAPI Specification for your API
Use the following template to complete an OpenAPI Specification file. This will automatically create some of the content that will go on the external portal.

Complete the description field of the OAS using the following formula:

The [name of your API] provides [describe functionality] so that users can [explain the intended outcome]



Example

Retrieve scientific, technical, and IP legal terminology in 10 languages from the WIPO Pearl database. The WIPO Pearl API helps you understand the meaning of scientific, technical, and IP legal terms, and use them correctly. It also helps you find a reliable equivalent for a term in another language. WIPO Pearl features over 250,000 terms in Arabic, Chinese, English, French, German, Japanese, Korean, Portuguese, Russian, and Spanish, and is developed by experienced language experts and terminologists at WIPO, as well as many partners who collaborate with us.

#2 Understand your primary developer audiences
Before you start to write your documentation, it is useful to list the key developer audiences or developer segments that you think will make use of your API. Keep these audiences in mind as you write, and as you complete each step, think about whether each of these audiences will get what the guidance they need.

Example

WIPO Pearl's developer audiences include:

Translators, interpreters, and editors
IP Offices and IP legal firms
Translation software providers
3 Describe a key use case for each of these audiences
For each of the audiences you have identified, explain how they will make use of your API. You want to help them understand the value they will get from using the API

Example

For WIPO Pearl:

Translators, interpreters, and editors - Quickly find reliable, validated equivalents in 10 languages for scientific, technical, and IP legal terms in 29 subject fields
IP Offices and IP legal firms - Quickly find reliable scientific, technical, and IP legal terminology in 29 subject fields and 10 key global languages that can be used for example to help identify prior art
Translation software providers - Integrate terminology services directly into your software so that your users can directly access WIPO scientific, technical, and IP legal terms in 10 languages
4 Explain the full feature set of the API
The use cases under Step 3 are intended to help developers quickly understand why and how they could use your API, but there will be more ways to use the API and more functionalities you offer. 

The description in the OpenAPI Specification and the key use cases in step 3 describe the overall intended value that the API aims to provide.

Now list in dot point all of the individual capabilities of the API. For each type of operation (GET, PUT, POST, DELETE), briefly explain each endpoint functionality.

You can use one the following words instead of the operation type to make it easier to understand:

GET - Search, Retrieve, Find, Discover, List, Translate

PUT - Update, Modify, Edit

POST - Add, Create

DELETE - Delete, Remove, Cancel

 

If you have a lot of functionalities, consider using subheadings and grouping information into subcategories. For example, if there are lots of features in your API, maybe you could group them by functionality categories: Searching records, Editing records, Adding records, etc and then group the features under each subheading.

Example

The following features are available in the WIPO Pearl API:

Search WIPO's database of scientific, technical, and IP legal terminology in up to 10 languages
Search for a term in one language and find reliable equivalents in up to 9 other languages
Search for terms across all records or filter for specific subject fields
5 Share any data models that are specific to your API
If your API requires users to enter abbreviations or specific codes, create a table for each data field in your data model and spell out how to use the field in easy to understand language.



For example, it is common for WIPO APIs to include filters where developers must indicate the target or response language using WIPO-approved languages. You can copy and paste the following explanation and table into your documentation:

This API can search the database in the 10 WIPO official languages. You can also request that technical terms be translated into any of the 10 WIPO official languages 

 To indicate which languages should be used, indicate with the following shortcodes



WIPO codes used to describe languages. WIPO standardises references of languages by using the ISO 639-1 

Language code used

Language the code refers to

AR

Arabic

DE

German

EN

English

ES

Spanish

FR

French

JA

Japanese

KO

Korean

PT

Portuguese

RU

Russian

ZH

Simplified Chinese

 

If your API includes date formats, you can also explain what date format you use. For example:

To enter dates, use the format YYYYDDMM

 

If your API provides geographic country information using ISO 2-letter country codes, it will be too long to include a full table of all ISO codes in the documentation. In these cases, you can use the following text:

To filter by country codes, WIPO uses the ISO 3166-1 alpha-2 standard. For a full list of country codes, see https://www.wipo.int/export/sites/www/standards/en/pdf/03-03-01.pdf

 

Your API may also have a specific data model that developers would be required to understand to use the API effectively. Spell out any data model so that new users can quickly start making use of the API.

 

Example

You can filter what industries you want to search for particular terms. Use the following shortcodes to indicate the industry you want to search:

Industry short code

Industry that the code refers to

ADMN

Banking,. Commerce and Administration

AERO

Aeronautics and Aerospace Engineering

AGRI

Agriculture, Fisheries, and Forestry

 AUDV

Audio, Audiovisual, Image and Video Technology

BLDG

Civil Engineering and Building Construction

CHEM

Chemical and Materials Technology

DATA

Computer Science and Telecommunications

ELEC

Electrical Engineering and Electronic Concepts

ENGY

Energy and Fuels

ENVR

Environmental and Safety Engineering

FOOD

Food Technology

HOME

Home and Business Furnishings

HORO

Precision Mechanics, Jewellery, and Horology

LEGL

Legal Matters

MANU

Manufacturing and Product Handling

MARI

Marine Engineering

MEAS

Standards, Units, Metrology and Testing

MECH

Mechanical Engineering

MEDI

Medical Science and Technology

METL

Metallurgy

MILI

Military Technology

MINE

Mining

PACK

Packaging and Distribution of Goods

PRNT

Printing and Paper

RAIL

Railway Engineering

ROAD

Road Vehicle and Automotive Engineering

SCIE

Natural and Applied Sciences

SPRT

Sports, Leisure and Tourism

TEXT

Leather and Textile Industries

6 Explain any specific options the API offers
The API you are publishing may have specific parameters that make it easier for developers to filter results in some way. For example, APIs with search functionality may offer a parameter to only search for exact matches of the search term.

 

List all of the parameters or filter options the API provides and any specific terms developers will need to use.

Example

The WIPO Pearl API provides the following options:

You can indicate if searches should only return results for the exact search term you provide, or fuzzy matches too.
You can request to search only for abbreviations.
Up to 5 terms are returned by default but you can control the number of records returned.
For large datasets, you can indicate what page number to start returning results.
You can set the maximum number of responses to receive.
Use the record ID number from a specific result retrieved for your search term to access the full database record showing information such as defining context for the term, source for the term, and term reliability score.
7 Describe how support is offered and users can share feedback
If you have correctly completed the OpenAPI Specification file, this section will be automatically completed with the contact information and email address indicated in the API description.

 

If there are specific support offers that you provide you can list them in this section.

 

Example

This API is managed by the WIPO Pearl team. For further enquiries, please write to: wipopearl@wipo.int



#8 Describe the authentication onboarding process
Most WIPO APIs require that developers sign up for an API key. Over time, the API management solution we use will manage API keys for you and allow a self-serve option for developers to gain an API key. For now, your existing API key mechanism should be described.

 

Example

To start using the API, follow these steps:

Request an API key by completing this form: https://www3.wipo.int/contact/en/area.jsp?area=wipopearl-api
The WIPO Pearl API team will contact you via email to confirm that you are eligible for an API key.
Open a command line interface or Terminal application on your computer.
Open the openssl tool by typing:
openssl genrsa -out yoursecretkey.pem 4096 where yoursecretkey.pem is…
Now get your public key by typing:
openssl rsa -in yoursecretkey.pem -pubout > yourpublickey.pub where yoursecretkey.pem is…
Your terminal application will publish your public key in the window. Copy this public key.
If you are eligible for using the WIPO API, you will have received an email from the WIPO Pearl team. Reply to this email pasting in your public key, as requested in the email.
In return, you will receive your encrypted API key from us. In your terminal, type::
openssl rsautl -decrypt -in wipopearl_encrypted_key -out plainTextKey.txt -inkey yoursecretkey.pem where wipopearl_encrypted_key is the API key you have been sent in our email and yoursecretkey.pem is…
Your terminal will now print your API key in plain text. Save this in a secure file.


#9 Summarise getting started in no more than 5 steps
Now you can summarise how your developer users can get started with using your API.

 

Most developers will jump ahead to look at the interactive user interface (called SwaggerHub) and test the API directly, but it is always useful to give a few simple steps so your developers can orient themselves quickly.

 

Use your Getting Started guide as a quick summary to walk through the main steps for new developers. Your goal should be to help developers to be able to return a successful API call in under 5 minutes.

 

Use the following formula if possible:

Remind the developer gets an API key
Summarise how the developer makes an API call, for example, any header that needs to be used
Provide the API request URL
Summarise a simple search or GET request that could be made in curl for the API
Describe the response they should receive
Explain how they can get help if they get an error
 

Example

Review the authentication guide to get your API key
Your API call must include x-api-key and the APIkey you have saved as plainTextKey.txt from your authentication process
Direct your API call to: https://api.wipopearl.pct.prd.web1.wipo.int/v1/records
You must include terms as a string as a required parameter, so your full URL request will be: https://api.wipopearl.pct.prd.web1.wipo.int/v1/records?term=”the term you want to search for”
Your response should be…
If you have any problems with making a request, you can contact…


#10 Create the interactive user interface
To be confirmed in Gravitee...

 

What should you have achieved by the end of the API maintenance stage?
Product roadmap is available and maintained for the API.

(Technically, the API maintenance stage never ends! But having a documented roadmap is a good milestone.)



Process for API maintenance at WIPO
Product Owner creates a process to inform Technical Owner when alerts are received on performance or access issues by users
Technical Owner creates a process to allocate developer time to addressing bugs as they arise
Technical Owner creates a process to keep Product Owner informed of how bugs are being resolved and to inform when the bu/issue is resolved
Product Owner communicates regularly with users to inform them of how their issue is being resolved 
Technical Owner and Product Owner create a calendar of meetings to review the API on a regular basis: analytics, feature requests and other emails, a ny other data on future needs
Technical Owner and Product Owner can use the sample survey/agenda for regular meetings
A roadmap is created outlining plans to extend features or address larger bugs/issues with the API
The Product Owner creates a regular process (quarterly, biannual or annual) to survey known users and gain feedback on use or future needs
The Product Owner regularly updates the relevant audience persona files and informs the API Working Group of audience needs that may impact other APIs used by the same audience
The Technical Owner and Product Owner show the roadmap to the line of business solution architect on a quarterly basis to discuss any resource allocation issues
Where possible, the roadmap can also be added to the external developer portal product page and users can be offered an opportunity to add their own feature requests or to help set priorities for identified future work
Click to add a new task...
