<?php

namespace App\Console\Commands;

use App\Mail\DatabaseBackupMail;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

class BackupDatabase extends Command {
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'backup:database';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle() {
        $fileName = 'backup-' . now()->format( 'Y-m-d_H-i-s' ) . '.sql';

        $command = sprintf(
            'mysqldump --user=%s --password=%s --host=%s %s > %s',
            env( 'DB_USERNAME' ),
            env( 'DB_PASSWORD' ),
            env( 'DB_HOST' ),
            env( 'DB_DATABASE' ),
            storage_path( 'app/' . $fileName )
        );

        exec($command, $output, $returnVar);
        if ($returnVar !== 0) {
            $this->error('Failed to create backup: ' . implode("\n", $output));
            return;
        }

        $this->info( 'Database backup created successfully!' );

        // Send the email with the backup file
        Mail::to('rkamruzzaman@gmail.com')->send(new DatabaseBackupMail($fileName));

        // Optionally, delete the backup file after sending
        Storage::delete($fileName);
    }
}
