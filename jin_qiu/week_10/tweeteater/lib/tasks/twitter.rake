namespace :twitter do
  desc 'Empties out the user and tweet tables'
  task :clear => :environment do  # we need hte rail environment
    User.destroy_all
    Tweet.destroy_all
  end

  desc 'Creates fake users and fake tweets'
  task :posts, [:user_count] => :environment do |_, args|
    FactoryGirl.create_list :user_with_tweets, args[:user_count].to_i
  end

  desc 'search tweets'
  task :search, [:query, :limit] => :environment do |t, args|

    $client.search(args['query'], result_type: "recent", lang: "en").take(args['limit'].to_i).each do |tweet|
      puts tweet.text
      Tweet.create(post:tweet.text)
    end



    # Bits of code will go here
    # Don't bother with getting users from Twitter
  end
end
