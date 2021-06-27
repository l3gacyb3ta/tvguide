require "json"

guide = {
  "channels": [] of Hash(String, String | Nil),
}

go = true

while go
  puts "Channel number"
  num = gets
  if num == "end"
    go = false
    break
  end
  puts "Name"
  name = gets
  guide["channels"].push({"name" => name, "number" => num})
end

File.write "genguide.json", guide.to_json

puts "Channels written to `genguide.json`"
