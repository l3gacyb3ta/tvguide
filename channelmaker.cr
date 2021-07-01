require "json"

puts "This will overwrite data/guide.json, so if you don't want to do that, ^C now."

# The basic data structure
guide = {
  "channels": [] of Hash(String, String | Nil),
}

go = true

while go
  puts "Channel number"
  num = gets
  if num == "end"
    # This is so my linter doesnt scream at me
    go = false
    break
  end
  puts "Name"
  name = gets
  # add the channel to the channles
  guide["channels"].push({"name" => name, "number" => num})
end

# write out the json
File.write "data/guidegen.json", guide.to_json

puts "Channels written to `data/guide.json`"
