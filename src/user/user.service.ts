import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const newUser = this.userRepository.create(createUserInput);
    return await this.userRepository.save(newUser);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(seq: number): Promise<User> {
    return await this.userRepository.findOne({ where: { seq } });
  }

  async update(seq: number, updateUserInput: UpdateUserInput): Promise<User> {
    const userToUpdate = await this.userRepository.findOne({ where: { seq } });

    if (!userToUpdate) {
      throw new Error(`User with ID ${seq} not found`);
    }

    Object.assign(userToUpdate, updateUserInput);
    return await this.userRepository.save(userToUpdate);
  }

  async remove(seq: number): Promise<boolean> {
    const result = await this.userRepository.delete(seq);
    return result.affected > 0;
  }
}
