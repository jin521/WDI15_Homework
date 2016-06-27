

def prompt( message)
  print message
  gets.chomp # implicit return
end


def menu
  puts "(a) -addition "
  puts "(s) -substraction"
  puts "(m) -multiplication"
  puts "(d) -division"
  puts "(e) -exponents"
  puts "(sr) -square_roots"
  puts "(q) -quit"
  prompt ( "enter your choice:")
end



def add
  puts "please enter a number "
  number = gets.to_i
  puts "please enter another number to add "
  number2 = gets.to_i
  puts "your result is : #{number + number2} "

end



def substract
  puts "please enter a number "
  number = gets.to_i
  puts "please enter another number to substract "
  number2 = gets.to_i
  puts "your result is : #{number - number2} "
end


def multiplicate
  puts "please enter a number "
  number = gets.to_i
  puts "please enter another number to multiply "
  number2 = gets.to_i
  puts "your result is : #{number*number2} "
end



def divide
  puts "please enter a number "
  number = gets.to_i
  puts "please enter another number to divide "
  number2 = gets.to_i
  puts "your result is : #{number / number2} "
end


def exponents
  puts "please enter a base number "
  number = gets.to_i
  puts "please enter exponent "
  number2 = gets.to_i
  puts "your result is : #{number**number2} "
end



def square_roots
  puts "please enter a base number "
  number = gets.to_i
  puts "your result is : #{Math.sqrt(number)} "
end


menu_selection = menu
puts "your choose : #{menu_selection} "

until menu_selection =='q'
  case menu_selection # inside the function -if not what do we do
  when 'a'
    add
  when's'
    substract
  when'm'
    multiplicate
  when'd'
    divide
  when 'e'
    exponents
  when 'sr'
    square_roots
  else
    puts "invalid selection, idiot"
  end
  menu_selection = menu
end

puts "thank you for using this calculator"
