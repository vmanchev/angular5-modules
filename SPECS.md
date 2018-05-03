# Functional specifications

## DemoUI
Create a simple library, which provides the following UI components:

### FancyButton
This component accepts a router path via an attribute. A button with "FancyButton" text 
should be displayed. When the button is clicked, user should be redirected to the path provided.

## Feature A
This feature should be accessible via "/feature-a" router path. It should use a FancyButton component, 
which redirected to Feature B.

### Acceptance tests:

1. When Feature B exists in the setup:
> Given I am on the '/feature-a' page<br />
> I should see a button with text "Fancy button"<br />
> And when I click on the button<br />
> I should be redirected to '/feature-b'

2. When Feature B does not exists in the setup:
> Given I am on the '/feature-a' page<br />
> I should see a button with text "Fancy button"<br />
> And when I click on the button<br />
> I should see an error message "Feature not found" in red color.

## Feature B
This feature should be accessible via "/feature-b" router path. It should use a FancyButton component, 
which redirected to Feature A.

### Acceptance tests:

1. When Feature A exists in the setup:
> Given I am on the '/feature-b' page<br />
> I should see a button with text "Fancy button"<br />
> And when I click on the button<br />
> I should be redirected to '/feature-a'

2. When Feature A does not exists in the setup:
> Given I am on the '/feature-b' page<br />
> I should see a button with text "Fancy button"<br />
> And when I click on the button<br />
> I should see an error message "Feature not found" in red color.