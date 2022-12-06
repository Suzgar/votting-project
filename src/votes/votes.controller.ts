import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Get('votting')
  create(@Body() createVoteDto: CreateVoteDto) {
    if(this.votesService.create(createVoteDto)){
      return 'This account have voted!';
    }
    return 'Vote succedded!';
  }

  @Get()
  findAll() {
    return this.votesService.findAll();
  }
  
}
