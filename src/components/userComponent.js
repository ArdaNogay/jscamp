import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component yüklendi")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

let user1 = new User(1,"Arda","Nogay","İstanbul")
let user2 = new User(2,"Engin","Demiroğ","Ankara")
userService.add(user1)
userService.add(user2)

console.log(userService.list())
console.log(userService.getById(2))

userService.list()



let customer = {id:1, firstName:"Arda"}

//prototyping
customer.lastName="Nogay"