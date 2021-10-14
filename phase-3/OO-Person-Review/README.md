# OO Person Lab

## Learning Goals

- Gain proficiency instantiating a class
- Gain ability to discern when to implement `attr_accessor`, `attr_reader`, and
  `attr_writer`
- Gain ability to discern when to define your own `attr_reader` (getter) and
  `attr_writer` (setter) methods

## Introduction

To practice object oriented programming (OOP), you're going to create a `Person`
class. Each instance of the `Person` class will have the ability to:

- Get paid/receive payments
- Take a bath
- Call a friend
- Start a conversation
- State if they are happy and/or clean

## A Note on Notation

In the instructions below (and in other labs), you'll see this notation used to
represent instance methods and class methods:

- `ClassName#method_name`: represents an **instance method** that can be called
  on the class
- `ClassName.method_name`: represents a **class method** that can be called on
  the class

For example, `Person#name` is an example of an instance method, that we can call
on an instance of a class:

```rb
class Person
  def name
    @name
  end
end
```

We can also define this particular instance method using a macro (which creates
the getter method for us):

```rb
class Person
  attr_reader :name

end
```

`Person.new` is an example of a class method (remember, to create a new instance
of the class, we call `ClassName.new`, which then calls the instance method
`ClassName#initialize`).

## Instructions

Create a `Person` class with the behavior described below. You can use `attr_`
macros for some of these deliverables; for others, you'll need to write custom
getter and/or setter methods.

- `Person.new(name)`: takes an argument of a name and saves it to the object.
  The person's name _should not_ be able to change after initialization. When a
  new person is created, they should have the following attributes in addition
  to their name (saved to instance variables):

  - `@bank_account` with an initial value of 25
  - `@happiness` with an initial value of 8
  - `@hygiene` with an initial value of 8

- `Person#name`: gets the person's name.

- `Person#bank_account`: gets the amount in a person's bank account.

- `Person#bank_account=(value)`: sets the value of the bank account to a
  new amount.

- `Person#happiness`: gets the value of the person's happiness points.

- `Person#happiness=(value)`: sets the value of the person's happiness
  points. The maximum value allowed is 10, and the minimum value allowed is 0.

- `Person#hygiene`: gets the value of the person's hygiene points.

- `Person#hygiene=(value)`: sets the value of the person's hygiene
  points. The maximum value allowed is 10, and the minimum value allowed is 0.

### Additional Instance Methods

- `Person#clean?`: returns `true` if the person's hygiene is more than seven;
  otherwise, it returns `false`.

- `Person#happy?`: returns `true` if the person's happiness is more than seven;
  otherwise, it returns `false`.

- `Person#get_paid(amount)`: accepts a salary amount and adds this to the
  person's bank account. The method should return the string
  `"all about the benjamins"`.

- `Person#take_bath`: increments the person's hygiene points by four and returns
  the string `"♪ Rub-a-dub just relaxing in the tub ♫"`.

- `Person#work_out`: increments the person's happiness by two points, decreases
  their hygiene by three points, and returns the Queen lyrics,
  `"♪ another one bites the dust ♫"`.

- `Person#call_friend(friend)`: accepts another instance of the `Person` class,
  or "friend". The method should increment the person and the friend's happiness
  points by three. It should also return a string. For example, if Stella calls
  her friend Felix, the method increment both Stella and Felix's happiness
  points and then return `"Hi Felix! It's Stella. How are you?"`.

- `Person#start_conversation(friend, topic)`: accept two arguments, the friend
  to start a conversation with and the topic of conversation.

  - If the topic is politics, both people get sadder (their happiness decreases
    by 2) and the method returns `"blah blah partisan blah lobbyist"`.
  - If the topic is weather, both people get a little happier (their happiness
    increases by 1) and the method returns `"blah blah sun blah rain"`.
  - If the topic is not politics or weather, their happiness points don't change
    and the method returns `"blah blah blah blah blah"`.
