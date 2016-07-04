class SecretnumbersController < ApplicationController

  def form
  end

  def getvalidation

    validations = ['right','wrong']
    @number = params[:number]
    @validation = validations[rand(2)]

  end

end
