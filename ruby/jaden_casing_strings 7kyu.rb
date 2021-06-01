class String
  def toJadenCase
    # ...
    
    splited = self.split(" ")
    splited.map { |word| word.capitalize }.join(" ")
    
  end
end