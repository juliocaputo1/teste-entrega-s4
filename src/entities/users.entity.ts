import { Entity, Column, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid"
import { Exclude } from "class-transformer"

@Entity()
export class Users {
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    @Exclude()
    password: string

    @Column()
    isAdm: boolean

    @Column()
    isActive: boolean

    @Column()
    createdAt: Date

    @Column()
    updatedAt: Date

    constructor() {
        if (!this.id) {
            this.id = uuidv4()
        }
        if (!this.isActive) {
            this.isActive = true
        }
        if (!this.createdAt) {
            this.createdAt = new Date()

        }
        if (!this.updatedAt) {
            this.updatedAt = new Date()

        }
    }
}