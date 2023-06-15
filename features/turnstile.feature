Feature: Turnstile

  Scenario: Trying to pass through a locked turnstile
    Given a locked turnstile
    When trying to push through the locked turnstile
    Then nothing should happen

  Scenario: Puting a coin on a locked turnstile
    Given a locked turnstile
    When putting a coin in the slot of the locked turnstile
    Then the turnstile should unlock

  Scenario: Passing through an unlocked turnstile
    Given an unlocked turnstile
    When after pushing through the unlocked turnstile
    Then the turnstile should lock

  Scenario: Putting a coin on an unlocked turnstile
    Given an unlocked turnstile
    When putting a coin in the slot of the unlocked turnstile
    Then nothing should happen
