class Magic8ballsController < ApplicationController
  def form
  end



  def getanswer
    answers = ['It is certain',
            'Without a doubt',
            'It is decidedly so',
            'Yes, definitely',
            'You may rely on it',
            'As I see it, yes',
            'Most likely',
            'Outlook good',
            'Yes',
            'Signs point to yes',
            'Reply hazy try again',
            'Ask again later',
            'Better not tell you now',
            'Cannot predict now',
            'Concentrate and ask again',
            'Don\'t count on it',
            'My reply is no',
            'My sources say no',
            'Outlook not so good',
            'Very doubtful']
    @question = params[:question]
    @answer = answers[rand(answers.length+1)]

  end

end
