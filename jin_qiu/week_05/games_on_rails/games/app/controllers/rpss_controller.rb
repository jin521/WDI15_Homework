class RpssController < ApplicationController

  def form
  end

  def getwinner
      computerpick = ['rock','paper','scissors']
      @userchoice = params[:throw].downcase
      @computerchoice = computerpick[rand(3)]
      @result

      if  (@userchoice =="rock"&& @computerchoice=="scissors")||
          (@userchoice=="paper"&& @computerchoice=="rock")||
          (@userchoice=="scissors"&& @computerchoice=="paper")
          @result= "you  win !"

        elsif @userchoice == @computerchoice
              @result= "It is a tie !";
        else  @result = "computer wins !"
        end
    end

end
