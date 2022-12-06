import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { Vote } from './entities/vote.entity';

@Injectable()
export class VotesService {
  private votes: Vote[] = [];
  create(username: string) {
    if(this.findOne(username)){
      return true;
    }
    const createVoteDto : CreateVoteDto = {username :username}
    this.votes.push(createVoteDto);
    return false;
  }

  findAll() {
    return this.votes;
  }

  findOne(name: string) {
    return this.votes.find(vote => vote.username === name);
  }
}
