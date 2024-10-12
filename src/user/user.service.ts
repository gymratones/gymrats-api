import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async findOrCreateUser(oauthUserData: any, provider: string): Promise<User> {
        let user = await this.userRepository.findOne({ where: { oauthId: oauthUserData.oauthId, authProvider: provider } });

        if (!user) {
            user = this.userRepository.create({
                oauthId: oauthUserData.oauthId,
                email: oauthUserData.email,
                firstName: oauthUserData.firstName,
                lastName: oauthUserData.lastName,
                profilePicture: oauthUserData.profilePicture,
                authProvider: provider,
                accessToken: oauthUserData.accessToken,
            });
        } else {
            user.email = oauthUserData.email || user.email;
            user.firstName = oauthUserData.firstName || user.firstName;
            user.lastName = oauthUserData.lastName || user.lastName;
            user.profilePicture = oauthUserData.profilePicture || user.profilePicture;
            user.accessToken = oauthUserData.accessToken || user.accessToken;
        }

        return await this.userRepository.save(user);
    }

    async findOne(id: number): Promise<User | undefined> {
        return this.userRepository.findOne({ where: { id } });
    }
}