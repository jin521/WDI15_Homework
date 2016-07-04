Rails.application.routes.draw do

  root :to =>'pages#home'  # the root goes to ..


      get '/home' =>'pages#home'   # pages controller, action is home

      get'/magic8ball' => 'magic8balls#form'
      get '/magic8ball/getanswer' =>'magic8balls#getanswer'

      get'/secretnumber' => 'secretnumbers#form'
      get '/secretnumber/getvalidation' =>'secretnumbers#getvalidation'

      get '/rps' => 'rpss#form'
      get '/rps/:throw' => 'rpss#getwinner'


  end
