package main

import (
	"fmt"
)

func main() {
	hello("xiaoma")
}

type User struct {
	name string
	age  int
}

func hello(name string) {
	user := User{"xiaoma", 3}
	fmt.Print(hello, user)
}

func a() {}
