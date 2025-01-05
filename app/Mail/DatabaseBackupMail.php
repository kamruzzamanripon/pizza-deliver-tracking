<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class DatabaseBackupMail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;

    public $fileName;

    /**
     * Create a new message instance.
     *
     * @param string $fileName
     * @return void
     */
    public function __construct($fileName)
    {
        $this->fileName = $fileName;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Weekly Database Backup')
                    ->markdown('mail.database-backup-mail')
                    ->attach(storage_path('app/' . $this->fileName));
    }
}
