import { Transform } from 'class-transformer'
import { IsOptional, IsString, IsBoolean, IsEnum } from 'class-validator'
import { Priority } from 'prisma/generated/client'

export class TaskDto {
	@IsOptional()
	@IsString()
	name: string

	@IsOptional()
	@IsBoolean()
	isCompleted?: boolean

	@IsOptional()
	@IsString()
	createdAt?: string

	@IsOptional()
	@IsEnum(Priority)
	@Transform(({ value }) => ('' + value).toLowerCase())
	priority?: Priority
}
