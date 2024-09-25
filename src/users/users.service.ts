import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
    ) { }

    async findOne(email: string): Promise<User | undefined> {
        return this.usersRepository.findOne({ where: { email } });
    }

    async create(user: Partial<User>): Promise<User> {
        const newUser = this.usersRepository.create(user);
        return this.usersRepository.save(newUser);
    }

    async findOrCreateByGoogle(profile: any): Promise<User> {
        let user = await this.usersRepository.findOne({ where: { googleId: profile.id } });
        if (!user) {
            user = await this.create({
                email: profile.emails[0].value,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                picture: profile.photos[0].value,
                googleId: profile.id,
            });
        }
        return user;
    }

    async update(id: number, updateUserDto: Partial<User>): Promise<User> {
        await this.usersRepository.update(id, updateUserDto);
        return this.usersRepository.findOne({ where: { id } });
    }

    async remove(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}