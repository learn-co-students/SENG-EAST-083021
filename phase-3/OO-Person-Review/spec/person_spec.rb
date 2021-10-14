RSpec.describe 'Person' do
  let(:stella) { Person.new('Stella') }
  let(:blanche) { Person.new('Blanche') }
  let(:people) { [stella, blanche] }

  describe 'initialization and attributes' do
    describe '.new' do
      it 'a new person is instantiated with a name' do
        expect { Person.new('Blake') }.not_to raise_error
      end
    end

    describe '#name' do
      it 'returns the name the person was initialized with' do
        expect(stella.name).to eq('Stella')
        expect(blanche.name).to eq('Blanche')
      end
    end

    describe '#name=' do
      it 'a new person instance cannot overwrite the name they were instantiated with' do
        expect { stella.name = 'some_new_name' }.to raise_error(NoMethodError)
      end
    end

    describe '#bank_account' do
      it 'a new person instance is initialized with a bank_account balance of $25' do
        expect(stella.bank_account).to eq(25)
        expect(blanche.bank_account).to eq(25)
      end
    end

    describe '#bank_account=' do
      it 'allows a person to change their bank account amount' do
        original_amount = stella.bank_account
        expect(stella.bank_account += 1).to eq(original_amount + 1)
      end
    end

    describe '#happiness' do
      it 'a new person instance is initialized with a happiness of 8' do
        expect(stella.happiness).to eq(8)
        expect(blanche.happiness).to eq(8)
      end
    end

    describe '#happiness=' do
      it 'allows a person to change their happiness' do
        stella.happiness = 9
        expect(stella.happiness).to eq(9)
      end

      it 'does not allow a person to change their happiness above 10' do
        stella.happiness = 11
        expect(stella.happiness).to eq(10)
      end

      it 'does not allow a person to change their happiness below 0' do
        stella.happiness = -1
        expect(stella.happiness).to eq(0)
      end
    end

    describe '#hygiene' do
      it 'a new person instance is initialized with a hygiene of 8' do
        expect(stella.hygiene).to eq(8)
        expect(blanche.hygiene).to eq(8)
      end
    end

    describe '#hygiene=' do
      it 'allows a person to change their hygiene' do
        stella.hygiene = 9
        expect(stella.hygiene).to eq(9)
      end

      it 'does not allow a person to change their hygiene above 10' do
        stella.hygiene = 11
        expect(stella.hygiene).to eq(10)
      end

      it 'does not allow a person to change their hygiene below 0' do
        stella.hygiene = -1
        expect(stella.hygiene).to eq(0)
      end
    end
  end

  describe 'non-attribute instance methods' do
    let(:penelope) { Person.new('Penelope') }
    let(:felix) { Person.new('Felix') }
    let(:people) { [penelope, felix] }

    describe '#happy?' do
      it 'returns true if happiness is greater than seven, else false' do
        penelope.happiness = 8
        expect(penelope.happy?).to eq(true)
      end

      it 'returns false if happiness is not greater than seven' do
        penelope.happiness = 7
        expect(penelope.happy?).to eq(false)
      end
    end

    describe '#clean?' do
      it 'returns true if hygiene is greater than seven' do
        penelope.hygiene = 8
        expect(penelope.clean?).to eq(true)
      end

      it 'returns false if hygiene is not greater than seven' do
        penelope.hygiene = 7
        expect(penelope.clean?).to eq(false)
      end
    end

    describe '#get_paid' do
      it 'accepts an argument of amount' do
        expect { penelope.get_paid(100) }.not_to raise_error
      end

      it 'increments bank_account by the amount' do
        original_amount = penelope.bank_account
        penelope.get_paid(100)
        expect(penelope.bank_account).to eq(original_amount + 100)
      end

      it 'returns "all about the benjamins"' do
        expect(penelope.get_paid(100)).to eq('all about the benjamins')
      end
    end

    describe '#take_bath' do
      it 'makes the person cleaner by 4 points' do
        penelope.hygiene = 4
        penelope.take_bath
        expect(penelope.hygiene).to eq(8)
      end

      it 'returns a song' do
        penelope.hygiene = 5
        expect(penelope.take_bath).to eq('♪ Rub-a-dub just relaxing in the tub ♫')
      end

      it "can't make a person cleaner by 10 points (hint: use the custom #hygiene= method)" do
        penelope.hygiene = 9
        penelope.take_bath
        expect(penelope.hygiene).to eq(10)
      end

      it 'calls on the #hygiene= method to increment hygiene' do
        penelope.hygiene = 9
        expect(penelope).to receive(:hygiene=).with(13).and_return(10)
        penelope.take_bath
      end
    end

    describe '#work_out' do
      it 'makes the person dirtier by 3 points' do
        penelope.hygiene = 10
        penelope.work_out
        expect(penelope.hygiene).to eq(7)
      end

      it 'never makes the person have negative dirty points (hint: use the #hygiene= method)' do
        penelope.hygiene = 1
        penelope.work_out
        expect(penelope.hygiene).to eq(0)
      end

      it 'calls on the #hygiene= method to decrease hygiene' do
        penelope.hygiene = 1
        expect(penelope).to receive(:hygiene=).with(-2).and_return(0)
        penelope.work_out
      end

      it 'makes the person happier by 2 points' do
        penelope.happiness = 7
        penelope.work_out
        expect(penelope.happiness).to eq(9)
      end

      it 'never makes the person have more than 10 happiness points (hint: use the #happiness= method)' do
        penelope.happiness = 9
        penelope.work_out
        expect(penelope.happiness).to be <= 10
        expect(penelope.happiness).to eq(10)
      end

      it 'calls on the #happiness= method to increment happiness' do
        penelope.happiness = 9
        expect(penelope).to receive(:happiness=).with(11).and_return(10)
        penelope.work_out
      end

      it 'returns Queen lyrics' do
        penelope.hygiene = 5
        expect(penelope.work_out).to eq('♪ another one bites the dust ♫')
      end
    end

    describe '#call_friend' do
      it 'accepts one argument, an instance of the Person class' do
        expect { penelope.call_friend(felix) }.not_to raise_error
      end

      it 'makes the person calling happier by three points' do
        penelope.happiness = 6
        penelope.call_friend(felix)
        expect(penelope.happiness).to eq(9)
      end

      it 'makes the friend happier by three points' do
        felix.happiness = 5
        penelope.call_friend(felix)
        expect(felix.happiness).to eq(8)
      end

      it 'never makes the happiness of either party exceed 10 (hint: use the custom #happiness= method)' do
        people.each { |person| person.happiness = 9 }
        
        penelope.call_friend(felix)
        
        people.each do |person|
          expect(person.happiness).to eq(10)
        end
      end

      it 'calls on the #happiness= method to increment happiness' do
        people.each { |person| person.happiness = 9 }
        
        people.each do |person|
          expect(person).to receive(:happiness=).with(12).and_return(10)
        end
        
        penelope.call_friend(felix)
      end

      it "returns a string that reflects the caller's side of the conversation" do
        expect(felix.call_friend(penelope)).to eq("Hi Penelope! It's Felix. How are you?")
        expect(penelope.call_friend(felix)).to eq("Hi Felix! It's Penelope. How are you?")
      end
    end

    describe '#start_conversation' do
      it 'accepts two arguments, a person to strike a convo with and a topic' do
        expect { penelope.start_conversation(felix, 'politics') }.not_to raise_error
      end

      context 'with topic: politics' do
        it "returns 'blah blah partisan blah lobbyist' if the topic is politics" do
          convo = 'blah blah partisan blah lobbyist'
          expect(penelope.start_conversation(felix, 'politics')).to eq(convo)
        end

        it 'if topic is politics, it makes both people in the convo two points less happy' do
          people.each { |person| person.happiness = 7 }
          penelope.start_conversation(felix, 'politics')
          people.each { |person| expect(person.happiness).to eq(5) }
        end

        it 'never makes either party less than 0 points happy (never negative) (hint: use your #happiness= method)' do
          people.each { |person| person.happiness = 1 }
          penelope.start_conversation(felix, 'politics')
          people.each do |person|
            expect(person.happiness).to eq(0)
          end
        end

        it 'calls on the #happiness= method' do
          people.each { |person| person.happiness = 1 }
          people.each do |person|
            expect(person).to receive(:happiness=).with(-1).and_return(0)
          end
          penelope.start_conversation(felix, 'politics')
        end
      end

      context 'with topic: weather' do
        it "returns 'blah blah sun blah rain' if the topic is weather" do
          convo = 'blah blah sun blah rain'
          expect(penelope.start_conversation(felix, 'weather')).to eq(convo)
        end

        it 'if topic is weather, it makes both people in the convo one point more happy' do
          people.each { |p| p.happiness = 7 }
          penelope.start_conversation(felix, 'weather')
          people.each { |p| expect(p.happiness).to eq(8) }
        end

        it 'never makes either party more than 10 points happy (hint: use your #happiness= method)' do
          people.each { |person| person.happiness = 10 }
          penelope.start_conversation(felix, 'weather')
          people.each do |person|
            expect(person.happiness).to eq(10)
          end
        end

        it 'calls on the #happiness= method' do
          people.each { |person| person.happiness = 10 }
          people.each do |person|
            expect(person).to receive(:happiness=).with(11).and_return(10)
          end
          penelope.start_conversation(felix, 'weather')
        end
      end

      context 'with topic: other' do
        it "returns 'blah blah blah blah blah' if the topic is not politics or weather" do
          convo = 'blah blah blah blah blah'
          expect(penelope.start_conversation(felix, 'programming')).to eq(convo)
        end

        it "if topic is not politics or weather, it doesn't affect happiness" do
          people.each { |p| p.happiness = 7 }
          penelope.start_conversation(felix, 'other')
          people.each { |p| expect(p.happiness).to eq(7) }
        end
      end
    end
  end
end
