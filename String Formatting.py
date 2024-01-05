def main():
    data = ("Robin", 10, "chocolates")
    
    format_string_named = "Hello {name}. You are currently left with {quantity} {item}."
    print(format_string_named.format(name=data[0],quantity=data[1],item=data[2]))
    
    name,quantity,item = data
    f_string = f"Hello {name}."
    print(f_string)
    
    return 0

if __name__ == '__main__':
    main()
