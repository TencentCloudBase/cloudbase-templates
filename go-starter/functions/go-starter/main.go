package main

import (
    "context"
    "fmt"
    "github.com/tencentyun/scf-go-lib/cloudfunction"
)

type DefineEvent struct {
    // test event define
    Key1 string `json:"key1"`
    Key2 string `json:"key2"`
}

func hello(ctx context.Context, event DefineEvent) (string, error) {
    fmt.Println("key1:", event.Key1)
    fmt.Println("key2:", event.Key2)
    return fmt.Sprintf("Hello %s!", event.Key1), nil
}

func main() {
    // Make the handler available for Remote Procedure Call by Cloud Function
    cloudfunction.Start(hello)
}